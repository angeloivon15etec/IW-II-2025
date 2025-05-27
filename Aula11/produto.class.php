<?php

class Produto {
    private $nome;
    private $preco;
    private $quantidade;

    public function __construct($nome = "", $preco = 0.0, $quantidade = 0) {
        $this->nome = $nome;
        $this->preco = $preco;
        $this->quantidade = $quantidade;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setPreco($preco) {
        $this->preco = $preco;
    }

    public function getPreco() {
        return $this->preco;
    }

    public function setQuantidade($quantidade) {
        $this->quantidade = $quantidade;
    }

    public function getQuantidade() {
        return $this->quantidade;
    }

    public function adicionarEstoque($qtd) {
        $this->quantidade += $qtd;
        return "Adicionado ao estoque: $qtd unidade(s)";
    }

    public function removerEstoque($qtd) {
        if ($qtd <= $this->quantidade) {
            $this->quantidade -= $qtd;
            return "Removido do estoque: $qtd unidade(s)";
        }
    }

    public function mostrarDetalhes() {
        echo "Produto: " . $this->nome . "<br>";
        echo "Preço: R$" . number_format($this->preco, 2, ',', '.') . "<br>";
        echo "Quantidade em estoque: " . $this->quantidade . "<br>";
    }
}
