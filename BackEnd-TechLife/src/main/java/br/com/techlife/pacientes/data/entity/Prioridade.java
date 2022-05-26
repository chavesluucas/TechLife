package br.com.techlife.pacientes.data.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.techlife.pacientes.data.dto.PrioridadeDTO;

@Entity
public class Prioridade implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	private String color;
	private Integer priorityOrder;
	
	public Prioridade(Integer id, String title, String color, Integer priorityOrder) {
		this.id = id;
		this.title = title;
		this.color = color;
		this.priorityOrder = priorityOrder;

	}
	
	public Prioridade() { }
	
	@JsonIgnore
	public PrioridadeDTO getDTO(){
		return new PrioridadeDTO(getId(), 
							   getTitle(),
							   getColor(),
							   getpriorityOrder());
	}
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Integer getpriorityOrder() {
		return priorityOrder;
	}

}
