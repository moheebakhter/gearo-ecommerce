export default function AccountPage() {
  return (
    <main className="simple-page">
      <section className="simple-page-content">
        <p className="simple-page-eyebrow">
          MY ACCOUNT
        </p>

        <h1>Welcome back.</h1>

        <p>
          Sign in to manage your account and orders.
        </p>

        <div className="account-form">
          <input
            type="email"
            placeholder="Email address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="button">
            Sign In
          </button>
        </div>
      </section>
    </main>
  );
}