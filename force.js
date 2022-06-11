
// var exports = {"__esModule": true};
// document.write(
//     decodeURI("%3Cscript src='require.js' type='text/javascript' %3E%3C/script%3E"));

document.write(
    decodeURI("%3Cscript defer src='https://unpkg.com/babel-standalone@6/babel.min.js' type='text/javascript' %3E%3C/script%3E"));

// document.write(
//   decodeURI("%3Cscript defer src='https://cdn.jsdelivr.net/npm/babel-plugin-transform-export-extensions@6.22.0/lib/index.min.js' type='text/javascript' %3E%3C/script%3E"));

// document.write(
//     decodeURI("%3Cscript defer src='https://cdn.jsdelivr.net/npm/babel-plugin-transform-es2015-modules-umd@6.24.1/lib/index.min.js' type='text/javascript' %3E%3C/script%3E"));

const loadJsx = (urls)=>{
    // let stringToAppend = decodeURI("%3Cscript defer type='text/babel' data-presets='react' src='"+urls+"' %3E%3C/script%3E");
    let scriptss = document.createElement("script");
    scriptss.src = urls;    
    scriptss.type = 'text/babel';
    scriptss.setAttribute("data-presets", "react");
    scriptss.setAttribute("data-type","module");
    scriptss.defer = false;
    scriptss.await = true;
    document.querySelector('#root').insertAdjacentElement('afterend',scriptss);
}





imports = (importUrl)=>{
    fetch(importUrl, {
    method: 'POST',
    body: 'a=1'
    })
    .then(fetchstat)
    .then(data => {
        // console.log('data:', data.json() )
        
        data.text().then(txt =>  {
            window.testdata = Babel.transform( txt, {"presets":['react'] });
            return ( window.testdata.code);
            }
        )
    })
    .catch(err => console.log(err));
}
window.imports = imports;

fetchstat= (fetchstat)=>{  
    if(fetchstat.status >= 200 && fetchstat.status < 300 ) //console.log(fetchstat , (()=>{return Promise.resolve(fetchstat)}) ) ;
        return fetchstat;
    else{
        return fetchstat;
    }
}