package br.com.techlife.pacientes.data.dto;

import java.io.Serializable;

import br.com.techlife.pacientes.data.entity.Cadastro;
import br.com.techlife.pacientes.data.entity.Prioridade;

public class CadastroDTO implements Serializable {
	private static final long serialVersionUID = 1L;	
	
	private Integer id;
	private String nome;
	private String cpf;
	private Integer idade;
	private String endereco;
	private Boolean flAtivo;

	private Prioridade prioridade;
	
	public CadastroDTO() {}

	public CadastroDTO(Integer id, String nome, String cpf, Integer idade, String endereco, Boolean flAtivo, Prioridade prioridade) {
		
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.idade = idade;
		this.endereco = endereco;
		this.flAtivo = flAtivo;
		this.prioridade = prioridade;
		
	}
	
	public Cadastro convertToEntity() {
		return new Cadastro(getId(),
				            getNome(), 
				            getCpf(),
				            getIdade(), 
				            getEndereco(), 
				            isFlAtivo(),
				            getPrioridade());
	};

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Integer getIdade() {
		return idade;
	}


	public void setIdade(Integer idade) {
		this.idade = idade;
	}


	public String getEndereco() {
		return endereco;
	}


	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Boolean isFlAtivo() {
		return flAtivo;
	}

	public void setFlAtivo(Boolean flAtivo) {
		this.flAtivo = flAtivo;
	}

	public Prioridade getPrioridade() {
		return prioridade;
	}

	public void setPrioridade(Prioridade prioridade) {
		this.prioridade = prioridade;
	}
	
	

	
}
