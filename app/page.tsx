import FloatingQuizCTA from "@/components/FloatingQuizCTA";

export default function ProductDetailPage() {
  return (
    <main className="relative min-h-screen px-4 pt-6 pb-32">
      {/* PDP content placeholder (non-goal to modify real PDP) */}
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">
          Nutriplenish™ Light Moisture Shampoo
        </h1>

        <p className="text-sm text-gray-700">
          Gently cleanses and replenishes moisture for fine to medium hair.
        </p>

        <div className="h-[800px]">
          {/* Simulated long PDP content */}
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingQuizCTA />
    </main>
  );
}
