import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { CORRIDORS } from '../../constants/resources';
import styles from './Resources.module.css';

export default function CorridorsPage() {
  useDocumentMeta({
    title: 'Country corridors | Jainanurag & Associates',
    description:
      'How documents from your country are legalised for an India entry: apostille or consular legalisation, and what to prepare before incorporation.',
  });

  return (
    <>
      <PageHero
        eyebrow="Corridors"
        title="From your country to India"
        lead="What India asks for is consistent. What changes is how a document from your country is legalised before it gets here."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Corridors' }]}
      />

      <Section>
        <Container>
          <h2 className={styles.heading}>Legalisation route by country</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className="visually-hidden">
                Document legalisation route for each country, and a note on local practice.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Legalisation route</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                {CORRIDORS.map((corridor) => (
                  <tr key={corridor.country}>
                    <th scope="row">{corridor.country}</th>
                    <td>
                      <span className={corridor.legalisation === 'Apostille' ? styles.tagApostille : styles.tagConsular}>
                        {corridor.legalisation}
                      </span>
                    </td>
                    <td>{corridor.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableNote}>
            Legalisation route only. Tax treatment depends on the treaty position and on the specific
            facts, which is not something to generalise in a table. Not listed here? The route depends
            on whether your country is a party to the Hague Apostille Convention, and we will confirm it.
          </p>

          <div className={styles.pending}>
            <Icon name="map" size={22} aria-hidden />
            <div>
              <strong>Full country guides are being prepared</strong>
              <p>
                Each corridor will get its own page covering local notarisation practice, typical
                document sets and the order to do things in.
              </p>
              <Link to="/start-in-india/country-guides" className={styles.pendingLink}>
                Read the document checklist <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Planning an entry from a country not listed?"
        lead="Tell us where the parent company or the founders sit and we will confirm the legalisation route and the document set."
      />
    </>
  );
}
