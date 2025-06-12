import { Timestamp } from "@/components/Timestamp";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-dark-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            © <Timestamp /> Exploring APIs while spending all my money.
          </p>
        </div>
      </div>
    </footer>
  );
}
