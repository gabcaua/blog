import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'

const features = [
  /* {
      text: 'Blazing fast',
      icon: Lightning,
    },
    {
      text: 'JAMstack based',
      icon: Jamstack,
    },
    {
      text: 'Always available',
      icon: Wifi,
    },
    {
      text: 'Customizable',
      icon: Edit,
    }, */
  {
    text: 'Automaticamente Escalável',
    icon: Plus,
  },
  /* {
    text: 'No Git',
    icon: Scroll,
  }, */
  {
    text: 'Baseado no Notion',
    icon: Notion,
  },
  {
    text: 'Otimizado para Celulares',
    icon: Lighthouse,
  },
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h3>{text}</h3>
      </div>
    ))}
  </div>
)

export default Features
