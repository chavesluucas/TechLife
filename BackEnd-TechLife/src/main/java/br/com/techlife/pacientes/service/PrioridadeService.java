package br.com.techlife.pacientes.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.techlife.pacientes.data.dto.PrioridadeDTO;
import br.com.techlife.pacientes.data.entity.Prioridade;
import br.com.techlife.pacientes.repository.PrioridadeRepository;

@Service
public class PrioridadeService {

	@Autowired
	PrioridadeRepository repository;

	public List<PrioridadeDTO> getAll(){
		List<Prioridade> prioridades = repository.findAll();
		List<PrioridadeDTO> listDTOs = new ArrayList<>();
	
		for(Prioridade prioridade: prioridades) {
			listDTOs.add(prioridade.getDTO());
		}
		return listDTOs;
	}
	
	public PrioridadeDTO getById(Integer id) throws Exception {
		Prioridade prioridade = repository.findById(id)
										.orElseThrow(
											()-> new Exception("Prioridade não localizada"));
		return prioridade.getDTO();
	}
	
	public PrioridadeDTO save(PrioridadeDTO dto) {
		Prioridade prioridade = repository.save(dto.convertToEntity());
		return prioridade.getDTO();
	}
	
}
