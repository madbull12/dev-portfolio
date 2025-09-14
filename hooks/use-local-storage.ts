import { useState, useEffect } from "react";

/**
 * useLocalStorage Hook
 * @param key - the localStorage key
 * @param initialValue - default value if not found
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Read initial value from localStorage (or fallback to initialValue)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Sync with localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
