'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  expanded: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export const MobileMenu = ({ expanded, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {expanded && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-base-300/30 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 right-0 glass-effect border-t border-base-content/10 shadow-lg"
          >
            <motion.ul className='flex flex-col p-4 space-y-2'>
              {menuItems.map(({ href, label }) => (
                <motion.li key={href} variants={itemVariants}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                      ${pathname === href 
                        ? 'bg-primary/10 text-primary translate-x-2'
                        : 'hover:bg-base-content/5 hover:translate-x-2'
                      }`}
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
