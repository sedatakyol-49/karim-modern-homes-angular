import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Immobilienbewertung = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-50">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
      <section
        style={{ backgroundColor: 'rgb(8, 145, 178)' }}
        className="py-12 mb-12"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Immobilien-Bewertung
          </h1>
        </div>
      </section>

      {/* Detaylı metin beyaz arka planda */}
      <main className="flex-1 pb-12">
        <div className="container mx-auto px-4 max-w-4xl bg-white rounded-lg shadow p-8">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Eine Bewertung der Immobilie ist notwendig und die Grundvoraussetzung für einen zufriedenen Verkauf. Mit unserem Zugang und Know-How zum und über den Markt wie auch den Preisen, erhalten Sie einen optimalen, fairen und realistischen Verkaufspreis.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Unser Rat ist: Nutzen Sie die Wertevermittlung durch unsere Experten
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Es gibt viele Einflussfaktoren in der Bewertung des Preises und wir kennen uns in diesem Bereich bestens aus. Wir kennen jeden Faktor für die Preisermittlung und wissen ihn zu bewerten und ideal einzusetzen. Das Ziel ist, dass Sie nicht unter Wert verkaufen, sondern mit einem erfahrenen Experten den Wert ermitteln und einen profitablen Preis festlegen.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Wir finden den Verkaufspreis, von welchem Sie langfristig profitieren werden. Nutzen Sie unsere langjährige Expertise im Bereich der Bewertung für Immobilien. Wir sind aktiv in Baden -Württemberg wie auch in anderen Bundesländern Deutschlands.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Gerne kümmern wir uns um die komplette Arbeit, welche Ihnen viel Zeit kostet. Mit rechtssicheren Daten zur Bewertung Ihres Objektes, erhalten Sie in angemessener Zeit ein Ergebnis von uns.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Auf Basis von Erfahrungswerten und vergleichbaren Objekten ist der ermittelte Preis nicht nur für Sie gewinnbringend, sondern auch ganzheitlich ehrlich und realistisch.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Neben der Preisermittlung erhalten Sie von uns die Erarbeitung professioneller Unterlagen für den anschließenden Verkauf und der Prozessabwicklung. Dazu gehören auch Marktwertgutachten und visuelle Werbeunterlagen, welche sorgfältig für die gesamte Verkaufsabwicklung individuell gestaltet werden.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">Wir freuen uns auf Sie!</p>
        </div>
      </main>
      </main>
      <Footer />
    </div>
  );
};

export default Immobilienbewertung;
