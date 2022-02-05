import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'
import skillsData from 'data/can-i-use.json'
import Skill from 'components/skill-data'

const Can: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={`manfredmmm - ${t('common:can').toLowerCase()}`}>
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div className="animate-fade-in w-3/4">
          <div className="w-full bg-gray-darkest text-center text-white-darkest h-14 mb-3 flex justify-center">
            <h3 className="font-semibold text-2xl">Can I use</h3>
            <input 
              type="text"
              placeholder="skill (ask me for html or js)"
              className="text-sm w-1/3 text-center bg-gray-darkest border-b-2 border-white text-white-darkest outline-0 transition animate-fade-in hover:bg-gray-dark"
            ></input>
            <span className="font-semibold text-2xl">?</span>
          </div>
          <div className="w-full bg-gray-dark p-8 grid grid-cols-3 gap-2">
            {skillsData.skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                items={skill.keys}
              />
            ))}
          </div>
        </div>
      </div>
      <Navigation prev="/work" next="/contact" />
    </Layout>
  );
}
  
export default Can;