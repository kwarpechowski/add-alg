import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class Apiori extends PureComponent {

  state = {
    minsup: 0.5,
    transactions: [
      ["cola", "orzeszki"],
      ["piwo", "orzeszki", "pieluszki"],
      ["cola"],
      ["cola", "piwo", "orzeszki"],
      ["piwo", "orzeszki", "pieluszki"]
    ]
  };

  displayTransactions() {
    const { transactions } = this.state;
    return transactions.map((tr, i) => (
      <ListItem key={i}>
        <strong>#TR{i+1}</strong>: {tr.join(', ')}
      </ListItem>
    ));
  }

  step1() {
    const obj = {};
    const { transactions, minsup } = this.state;

    transactions.forEach(tr => {
      tr.forEach(item => {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
      })
    });

   return Object.entries(obj).map(([key, value]) => {
     const sup = value/transactions.length;
     const czy = sup >= minsup ? 'Tak' : 'Nie';
     return (
       <TableRow key={key}>
         <TableCell>{key}</TableCell>
         <TableCell>{value}</TableCell>
         <TableCell>{(sup).toFixed(2)} ({value} z {transactions.length})</TableCell>
         <TableCell>{czy}</TableCell>
       </TableRow>
     )
   });
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="headline">Apiori</Typography>
          <List>
            {this.displayTransactions()}
          </List>
          <Typography variant="title">Krok 1</Typography>
          <Typography gutterBottom>
            Liczenie ile jest wystąpień danego produktu
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nazwa produktu</TableCell>
                <TableCell>Ilość wystąpień</TableCell>
                <TableCell>Support (wsparcie)</TableCell>
                <TableCell>Czy przechodzi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.step1()}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
}