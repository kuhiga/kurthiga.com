import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>StairQuest: Climb to Fitness</title>
        <meta
          name="description"
          content="A comprehensive guide to getting the most out of your StairQuest app."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          StairQuest: Climb to Fitness
        </h1>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            ℹ️ Introduction
          </h2>
          <p className="mt-2 text-gray-700">
            Welcome to StairQuest, your ultimate companion for maximizing your
            stair machine workouts. Track progress, set goals, and improve your
            health with our comprehensive app.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            🏋️ Tips on using the app
          </h2>
          <p className="mt-2 text-gray-700">
            📊 Check Out Your Past Workouts: See how you did and feel free to
            make your next workouts harder or easier. It`s all about finding
            what`s best for you.
          </p>
          <p className="mt-2 text-gray-700">
            🏁 Update Your Goals: If your goals feel too easy or too tough,
            change them up. It`s important to keep things challenging but
            doable.
          </p>
          <p className="mt-2 text-gray-700">
            🖍️ Make the App Yours: Head over to settings to change how the app
            looks. A look you love can make using the app even more fun.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            🛡 Basic Safety Tips
          </h2>
          <p className="mt-2 text-gray-700">
            Ensure a safe workout by following these tips:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Check the machine before use to ensure it`s in good working
              condition.
            </li>
            <li>Wear appropriate footwear for support and cushioning.</li>
            <li>Stay hydrated before, during, and after workouts.</li>
            <li>Listen to your body to avoid overexertion.</li>
            <li>
              Keep the emergency stop within easy reach during your workout.
            </li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700">✉️Support</h2>
          <p className="mt-2 text-gray-700">
            If you have any questions or need support, please don`t hesitate to
            contact me by sending me an{" "}
            <a href="mailto:kurthigaa@gmail.com" className="text-blue-700">
              email
            </a>
            .
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Privacy Policy
          </h2>
          <p className="mt-2 text-gray-700">
            The following data may be collected but is not linked to your
            identity: Usage Data, Diagnostics. These are collected in order to
            improve the app experience and are not shared.
          </p>
        </section>
      </main>
    </>
  );
}
