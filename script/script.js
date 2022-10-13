        let res = document.getElementById("res");
        let vcorf, vcort, vnome;
    
        if (typeof(Storage) != "undefine") {
            
            //localStorage.setItem("visitas", "1")
            if (localStorage.visitas > 0) {
                localStorage.visitas = Number(localStorage.visitas)+1
                document.write(localStorage.visitas);
                
            }
            else {
                localStorage.visitas = 1;
            }
            
             //localStorage.getItem("visitas")
           
            
        
    }
    else {
        document.write("Sem suporte a Web Storage");
    }
    function gravar() {
        vnome = document.getElementById("fnome").value;
        
        //localStorage.corf = vcorf;
        localStorage.setItem("corf", vcorf);
        //localStorage.cort = vcort;
        localStorage.setItem("cort", vcort);
        //localStorage.nome = vnome;
        localStorage.setItem("nome", vnome);
        //mesma chave ele substitui?
    }
    // parametros recebem os valores quando são chamados opcional
    function defineCor(op, cor) {
        if (op==1) {
            document.body.style.background = cor;
            vcorf = cor;
            //azul
        } else {
            document.body.style.color = cor;
            vcort = cor;
            //branco
        }
    }