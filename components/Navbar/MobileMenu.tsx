'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  expanded: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ expanded, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {expanded && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="glass-effect border-t border-base-content/10"
        >
          <ul className='flex flex-col space-y-2 p-4'>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href='/about'
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-base-content/5'
                }`}
                onClick={onClose}
              >
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href='/projects'
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === '/projects'
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-base-content/5'
                }`}
                onClick={onClose}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href='/experience'
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === '/experience'
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-base-content/5'
                }`}
                onClick={onClose}
              >
                Experience
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href='/contact'
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === '/contact'
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-base-content/5'
                }`}
                onClick={onClose}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
