select distinct '{ assinanteId: 1, produtoCodigo: ', a.procod, ', balanca: ', a.proenvbal, ', produtoId:  ', a.prodid, ', unidadeVenda: "', a.prounid, '", descricao: "', a.prodes, '", pesoVariavel: "', a.propesvar,'", quantidadeItensEmbalagens: ', a.proiteemb,', preco: ', c.prcvdavar, '}' 
from produto a
inner join produtoaux b on a.procod = b.procod
inner join preco c on a.procod = c.procod
order by procod;

select '{ assinanteId: 1, produtoId:', procod, ', fator: ', proauxfat, ', tipo: "', proauxtipo, '", codigo: "', proauxcodigoean, '"},' 
from produtoaux a order by procod;

select a.prodes, b.proauxfat
from produto a
inner join produtoaux b on a.procod = b.procod
where b.proauxfat > 1;

