//const myarray = [1,2,3,4,5,6,7,8,9]
//const total= myarray.filter ( (par) => par>4) 

//console.log(myarray);


//data 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter( (bks) =>
  { 
    return bks.publish >2010 
} )
  //console.log(userbooks);


//map 

 const myarray1 = [1,2,3,4,5]
 const myarrtotal= myarray1.map( (nums) => nums+1 ).map( (nums)=>nums*2).filter((nums) => nums>=8)

console.log(myarrtotal);

  // Reduce 

  const myarray = [1,2,3,4,5]
  
  const total= myarray.reduce( (acc,cuurv) =>  acc+cuurv,0 )

  //console.log(total);

