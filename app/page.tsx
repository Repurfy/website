import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0E14] px-6 text-white">
      <div className="max-w-2xl w-full text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center font-bold text-lg">
              R
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">RePurfy</h1>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Something powerful is coming.
        </h2>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          AI-powered content repurposing that transforms articles, documents, videos, and notes
          into platform-ready posts — instantly.
        </p>

        {/* EMAIL FORM */}
        <form
          action="https://formsubmit.co/hello@repurfy.com"
          method="POST"
          className="flex flex-col sm:flex-row items-center gap-3 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-72 rounded-xl bg-white/10 text-white placeholder-gray-400
                       border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 font-medium
                       flex items-center gap-2 hover:opacity-90 transition"
          >
            <Mail size={18} />
            Join Waitlist
          </button>

          {/* FormSubmit Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
        </form>

        {/* FOOTER */}
        <p className="mt-6 text-sm text-gray-500">
          Get early access when we launch.
        </p>
      </div>
    </main>
  );
}
