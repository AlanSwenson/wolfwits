export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-xs text-gray-500 dark:text-gray-400">
      <p>
        Website created by{' '}
        <a
          href="https://alanswenson.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Alan Swenson
        </a>{' '}
        © {currentYear}
      </p>
    </footer>
  );
}

