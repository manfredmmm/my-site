import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const About: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title={`manfredmmm - ${t('common:about').toLowerCase()}`}>
      <div className="bg-white-darkest h-full lg:h-screen flex flex-row justify-center items-center px-10 lg:px-20 py-14 lg:py-0">
        <div className="lg:basis-1/2 animate-fade-in">
          <h1 className="text-xl uppercase mb-6 font-heading">{t('about:title')}</h1>
          <p className="mb-2">{t('about:p1')}</p>
          <p>{t('about:p2')}</p>
        </div>
        <div className="lg:basis-1/2 ml-10 h-full animate-fade-in">
          <figure className="bg-mmm-about bg-no-repeat bg-contain bg-bottom h-full max-w-sm m-auto"></figure>
        </div>
      </div>
      <Navigation prev="/" next="/work" />
    </Layout>
  );
}

export default About;