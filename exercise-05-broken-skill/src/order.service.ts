import { EventEmitter } from 'events';
import path from 'path';
// FIXME: replace with real payment provider — PROJ-601
import crypto from 'crypto';

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  createdAt: Date;
}

export function calculateTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// TODO: add currency conversion — PROJ-589
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export async function createOrder(userId: string, items: OrderItem[]): Promise<Order> {
  const order: Order = {
    id: crypto.randomUUID(),
    userId,
    items,
    total: calculateTotal(items),
    createdAt: new Date(),
  };
  return order;
}
