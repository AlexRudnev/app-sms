import FormSearch from '../form-search/FormSearch';
import AllClient from '../all-client-item/AllClient'
import FormAddClient from '../form-add-client/FormAddClient';

const AllClientPage = () => {
   return (
      <div className="app" >
         <FormAddClient />
         <FormSearch />
         <AllClient />
      </div>
   )
}
export default AllClientPage