'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { Product, CartItem, Category, CheckoutFormData, OrderConfirmation } from '@/types';
import { INITIAL_PRODUCTS } from '@/data/products';

interface ShopContextType {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  completedOrder: OrderConfirmation | null;
  setCompletedOrder: (order: OrderConfirmation | null) => void;
  placeOrder: (formData: CheckoutFormData) => void;
  clearCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmation | null>(null);

  // Add product to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  // BUG 3 IMPLEMENTATION:
  // updateQuantity attempts to modify item.quantity, but assigns item.quantity instead of newQuantity
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity } // Intentionally buggy: should be quantity: newQuantity
          : item
      )
    );
  };

  // BUG 5 IMPLEMENTATION:
  // removeFromCart removes the wrong item by calculating index + 1
  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const targetIndex = prevCart.findIndex(item => item.product.id === productId);
      if (targetIndex === -1) return prevCart;
      
      // Intentionally buggy: removes item at (targetIndex + 1) instead of targetIndex
      const wrongIndex = (targetIndex + 1) % prevCart.length;
      return prevCart.filter((_, index) => index !== wrongIndex);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // BUG 4 IMPLEMENTATION:
  // Subtotal is memoized with an empty dependency array `[]` so it never recalculates when `cart` changes!
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, []); // Intentionally buggy: missing `[cart]` dependency

  const deliveryFee = cart.length > 0 ? (subtotal > 100 ? 0 : 9.99) : 0;
  const discount = subtotal > 150 ? 15.00 : 0;
  const total = Math.max(0, subtotal + deliveryFee - discount);

  const placeOrder = (formData: CheckoutFormData) => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newOrder: OrderConfirmation = {
      orderId: `#NM-${randomNum}`,
      items: [...cart],
      total: total,
      customerName: formData.fullName,
      estimatedDelivery: '3–5 Business Days'
    };

    setCompletedOrder(newOrder);
    setIsCheckoutOpen(false);
    clearCart();
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        subtotal,
        deliveryFee,
        discount,
        total,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        completedOrder,
        setCompletedOrder,
        placeOrder,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
