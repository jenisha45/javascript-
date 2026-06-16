function truncateString(s,n)
{
if(s.length>n)
{
  return s.slice(0,n)+"...";

}
else
{
  return s;
}
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))