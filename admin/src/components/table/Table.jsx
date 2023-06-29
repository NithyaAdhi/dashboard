import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 889,
      product: "phone",
      img: "https://th.bing.com/th/id/OIP.KwavIwuhhIw20dSqHQA4pAHaHa?pid=ImgDet&rs=1",
      customer: "K. Smith",
      date: "10th of March",
      amount: 785,
     
    },
    {
      id: 990,
      product: "laptop",
      img: "https://th.bing.com/th/id/R.fd640ebf70eff22c88dad94a4eef3041?rik=L5DZbUP%2b0SQu7Q&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05512731_1750x1285.jpg&ehk=v078V0Xw%2bTe2FE8UVA92%2fDUWAJ5XGaNggNTGNoYjq3g%3d&risl=&pid=ImgRaw&r=0",
      customer: "A.Michael ",
      date: "2nd of July",
      amount: 900,

    },
    {
      id: 878,
      product: "PC",
      img: "https://th.bing.com/th/id/R.bd3ce0c59a976c06b1a01f232fc9d78e?rik=yyUosuaBeIILEQ&riu=http%3a%2f%2fcdn1.expertreviews.co.uk%2fsites%2fexpertreviews%2ffiles%2f8%2f93%2fpc_specialist_invictus_0_0.jpg&ehk=NcTwJJHRR9D94UgAaICOfI2jHBg%2fzgH4KW7M%2fHfiAbE%3d&risl=&pid=ImgRaw&r=0",
      customer: "John Smith",
      date: "14th of March",
      amount: 35,
     
    }
   
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
           
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
            
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
            
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
