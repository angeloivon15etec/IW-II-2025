<?php
    include_once 'Produto.class.php';

    $produto = new Produto();

    $produto->setNome("Mouse");
    $produto->setPreco(150.00);
    $produto->setQuantidade(10);

    $produto->mostrarDetalhes();

    echo "<hr>";
?>
