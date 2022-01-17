export default function CardTables({ providers }) {
  if (providers == null) {
    return( 
      <div className="h-screen w-screen flex flex-col bg-gray-50">
      </div>
    )} else {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location & Mailing address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {providers.results.map(provider => (
                  <tr key={provider.number}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="object-contain h-10 w-10 rounded-full" src="https://sanabenefits.com/wp-content/themes/sana-benefits/images/logo.png" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{ provider.basic.first_name || provider.basic.organization_name } { provider.basic.last_name }</div>
                          <div className="text-sm text-gray-500">National Provider Identifier(NPI): {provider.number}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        📍 {provider.addresses[0].address_1} {provider.addresses[0].address_2} {provider.addresses[0].city}, {provider.addresses[0].state} {provider.addresses[0].postal_code}
                      </div>
                      <div className="text-sm text-gray-900">
                        📭 {provider.addresses[1].address_1} {provider.addresses[1].address_2} {provider.addresses[1].city}, {provider.addresses[1].state} {provider.addresses[1].postal_code}
                      </div>
                      <div className="text-sm text-gray-500">
                        
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{provider.taxonomies[0].desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )}
}

// export async function getStaticProps() {
//   const providers = await fetch('https://npiregistry.cms.hhs.gov/api/?version=2.1&city=lasvegas')
//     .then(res => res.json());
//   return {
//     props: {
//       providers
//     }
//   }
// }