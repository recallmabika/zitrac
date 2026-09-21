import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-mono font-semibold tracking-widest text-red-500 uppercase mb-2">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-400 max-w-md text-sm mb-8 leading-relaxed">
        The requested technical resource could not be located on the server or has been migrated to another endpoint.
      </p>
      <Link
        href="/"
        className="btn-glow inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 hover:scale-105 transition-all focus:outline-none"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
