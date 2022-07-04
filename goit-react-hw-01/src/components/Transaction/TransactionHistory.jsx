import items from '../transactions.json';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = () => {
    return (
        <table className={styles.transactionHistory}>
        <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
        </thead>
        {items.map (item => (
           <tbody>
           <tr key={item.id}>
             <td>{item.type}</td>
             <td>{item.amount}</td>
             <td>{item.currency}</td>
           </tr>
         </tbody>
        
        )) }
         </table>   
        
    );

};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,
  }),
),};


export default TransactionHistory;