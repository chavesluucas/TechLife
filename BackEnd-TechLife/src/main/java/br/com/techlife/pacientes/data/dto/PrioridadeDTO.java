package br.com.techlife.pacientes.data.dto;

import br.com.techlife.pacientes.data.entity.Prioridade;

public class PrioridadeDTO {

	private Integer id;
	private String title;
	private String color;
	private Integer priorityOrder;
	
	public PrioridadeDTO(Integer id, String title, String color, Integer priorityOrder) {
		this.id = id;
		this.title = title;
		this.color = color;
		this.priorityOrder = priorityOrder;
	}
	
	public Prioridade convertToEntity() {
		return new Prioridade(getId(), 
				   getTitle(),
				   getColor(),
				   getpriorityOrder());
	};

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



	public void setpriorityOrder(Integer priorityOrder) {
		this.priorityOrder = priorityOrder;
	}
	
	
	
	
}
