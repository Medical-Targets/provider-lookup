export default function Provider({provider}){
    return (
        <div>
            <div>{provider.basic.first_name}</div>
        </div>
    )
}

async function getStaticProps() {
    const results = await fetch('https://npiregistry.cms.hhs.gov/api/?version=2.1&city=lasvegas')
        .then(res => res.json());

    return {
      props: {
        provider: results[0]
      }
    }
  }