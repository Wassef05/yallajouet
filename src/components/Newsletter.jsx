export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <span className="eyebrow">Restez informés</span>
        <h2>Nouveautés chaque semaine</h2>
        <p>
          Soyez les premiers à découvrir nos nouveaux jouets éducatifs,
          nos offres exclusives et nos conseils pour des moments de jeu enrichissants.
        </p>
        <form
          className="newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" placeholder="Votre adresse email" required />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </section>
  )
}
