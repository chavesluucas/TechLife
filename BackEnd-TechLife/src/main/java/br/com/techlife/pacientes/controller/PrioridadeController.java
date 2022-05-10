package br.com.techlife.pacientes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.techlife.pacientes.data.dto.PrioridadeDTO;
import br.com.techlife.pacientes.service.PrioridadeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/prioridade")
public class PrioridadeController {

	@Autowired
	PrioridadeService service;
	
	@GetMapping
	public List<PrioridadeDTO> getAll(){
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public PrioridadeDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}
	
	@PostMapping
	public ResponseEntity<PrioridadeDTO> save(@RequestBody PrioridadeDTO prioridade) {
		return new ResponseEntity<PrioridadeDTO>(service.save(prioridade), HttpStatus.CREATED);
	}

}
