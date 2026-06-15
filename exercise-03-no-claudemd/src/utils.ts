// Utility functions

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}

// Old version kept for reference during migration
// export function formatDateLegacy(date: Date): string {
//   return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
// }
