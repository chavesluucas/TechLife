package br.com.techlife.pacientes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.techlife.pacientes.data.entity.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Integer>{
	
	List<Cadastro> findByFlAtivo(boolean flAtivo);

}
