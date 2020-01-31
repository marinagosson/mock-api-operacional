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

>>>> NOVO - ACRESCIMO DO PRECO DO PRODUTO

select distinct '{ assinanteId: 1, produtoCodigo: ', a.procod, ', balanca: ', a.proenvbal, ', produtoId:  ', a.prodid, ', unidadeVenda: "', a.prounid, '", descricao: "', a.prodes, '", pesoVariavel: "', a.propesvar,'", quantidadeItensEmbalagens: ', a.proiteemb, ', preco : { loja:  ', c.lojcod, ', produto: ', c.procod, ', preco1: ', c.prcpreco1, ', preco_venda1: ', c.prcvdavar, ', preco_oferta1: ', c.prcofevar, ', preco2: ', c.prcpreco2, ', preco_venda2: ', c.prcvda2, ', preco_oferta2: ', c.prcofe2, ', preco3: ', c.prcpreco3, ', preco_venda3: ', c.prcvda3, ', preco_oferta3: ', c.prcofe3, ', }' 
from produto a
inner join produtoaux b on a.procod = b.procod
inner join preco c on a.procod = c.procod
order by a.procod;

>>>> listagem de preco 

select distinct '{ produtoCodigo: ', a.procod, ', loja: ', c.lojcod, ', produto: ', c.procod, ', preco1: ', c.prcpreco1, ', preco_venda1: ', c.prcvdavar, ', preco_oferta1: ', c.prcofevar, ', preco2: ', c.prcpreco2, ', preco_venda2: ', c.prcvda2, ', preco_oferta2: ', c.prcofe2, ', preco3: ', c.prcpreco3, ', preco_venda3: ', c.prcvda3, ', preco_oferta3: ', c.prcofe3, ' },' 
from produto a
inner join produtoaux b on a.procod = b.procod
inner join preco c on a.procod = c.procod
order by a.procod;

'{loja:  ', c.lojcod, ', 
produto: ', c.procod, ', 
preco1: ', c.prcpreco1, ', 
preco_venda1: ', c.prcvdavar, ', 
preco_oferta1: ', c.prcofevar, ', 
preco2: ', c.prcpreco2, ', 
preco_venda2: ', c.prcvda2, ', 
preco_oferta2: ', c.prcofe2, ', 
preco3: ', c.prcpreco3, ', 
preco_venda3: ', c.prcvda3, ', 
preco_oferta3: ', c.prcofe3, ', 
}' 