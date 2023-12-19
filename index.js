import { connect } from 'odbc';

const w_connectionString = `Driver=IBM i Access ODBC Driver;SIGNON=0;XDYNAMIC=0;System=ACE;UID=;Password=;`

const w_connection = await connect(w_connectionString);

const w_result = await w_connection.query(
  `SELECT * From sysibm.sysdummy1 where IBMREQD = ?`, ['Y']).catch(p_error=>{console.log(p_error)});

console.log(w_result);