package br.com.techlife.pacientes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.techlife.pacientes.data.entity.Prioridade;

@Repository
public interface PrioridadeRepository extends JpaRepository<Prioridade, Integer>{
	
	public List<Prioridade> findAllByOrderByPriorityOrderAsc();

}
