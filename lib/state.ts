import { MutableRefObject } from 'react';
import { atom } from 'jotai';
import { Note } from 'types/supabase';

// Stores the notes that are open, including the main note and the stacked notes
export const openNotesAtom = atom<
  { note: Note; ref: MutableRefObject<HTMLElement | null> }[]
>([]);

// Stores whether the find or create modal is open
export const isFindOrCreateModalOpen = atom<boolean>(false);
