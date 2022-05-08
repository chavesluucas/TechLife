package br.com.techlife.pacientes.data.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.techlife.pacientes.data.dto.CadastroDTO;

@Entity
public class Cadastro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String cpf;
	private Integer idade;
	private String endereco;
	private Boolean flAtivo;
	
//	private Integer prioridade;
	
	public Cadastro () { }


	public Cadastro(Integer id, String nome, String cpf, Integer idade, String endereco, Boolean flAtivo) {
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.idade = idade;
		this.endereco = endereco;
		this.flAtivo = flAtivo;
//		setPrioridade(prioridade);
	}

	public CadastroDTO getDTO(){
		return new CadastroDTO(getId(), 
							   getNome(),
							   getCpf(),
							   getIdade(),
							   getEndereco(),
							   isFlAtivo());
	}
	
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
	
//	public Prioridade getPrioridade() {
//		return Prioridade.valueOf(prioridade);
//	}
//
//
//	public void setPrioridade(Prioridade prioridade) {
//		if(prioridade != null) {
//			this.prioridade = prioridade.getCode();			
//		}
//	}
}
