document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myBtn').addEventListener('click', function () {
        shorten()
    })
    
});
const shorten = async () => {
  const value = document.getElementById('url').value
  const url = {url:value};
  await fetch('https://aka.cscms.me/api/newUrl', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    mode: 'cors',
    body: JSON.stringify(url),
  }).then((res)=>res.json()).then(data=>{
    console.log(data.shortUrl)
      if(data.shortUrl){
      console.log("TEST")
      const shortURL = 'aka.cscms.me/'+data.shortUrl;
      document.getElementById('output').innerText ='';
      document.getElementById('output').style.color ='#1c1c1c';
      document.getElementById('output').style.fontSize ='1.2em';
      document.getElementById('output').innerHTML = "<div id='shorten'><a target='_blank' id='shorturl' href='https://"+shortURL+"'>"+shortURL+"</a></div> <div id='copy'>copy</div>"
      document.getElementById("copy").addEventListener('click',()=>{
        var temp = document.getElementById('shorturl').innerText;
        const el = document.createElement('textarea');
        el.value = temp;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })} else {
        document.getElementById('output').innerText = "ERROR !!"
        document.getElementById('output').style.color = "red";
        document.getElementById('output').style.fontSize = "2em";
    }
  }).catch(err=>{
      document.getElementById('output').innerText = "ERROR !!"
      document.getElementById('output').style.color = "red";
      document.getElementById('output').style.fontSize = "2em";
  })

}
