export type { DonationPost } from './donation';

const DB_NAME = 'donations-db';
const STORE_NAME = 'donation-posts';
const DB_VERSION = 2;

function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

export async function saveDonationPosts(posts: import('./donation').DonationPost[]): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        tx.oncomplete = () => resolve();
        tx.onabort = tx.onerror = () => reject(tx.error);
        posts.forEach((post) => store.put(post));
    });
}

export async function getAllDonationPosts(): Promise<import('./donation').DonationPost[]> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result as import('./donation').DonationPost[]);
        req.onerror = () => reject(req.error);
    });
}