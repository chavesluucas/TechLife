package br.com.techlife.pacientes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.techlife.pacientes.data.dto.CadastroDTO;
import br.com.techlife.pacientes.service.CadastroService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cadastro")
public class CadastroController {

	@Autowired
	CadastroService service;

	@GetMapping
	public List<CadastroDTO> getAll(@RequestParam boolean somenteEmAtendimento){
		if(somenteEmAtendimento) {
			return service.getSomenteEmAtendimento();
		} else {
			return service.getAll();
		}
	}
	
	@GetMapping("/{id}")
	public CadastroDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}
	
	@PostMapping
	public ResponseEntity<CadastroDTO> save(@RequestBody CadastroDTO cadastro) {
		return new ResponseEntity<CadastroDTO>(service.save(cadastro), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer id) throws Exception{
		return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<CadastroDTO> update(@RequestBody CadastroDTO obj) throws Exception{
		
		return new ResponseEntity<CadastroDTO>(service.update(obj), HttpStatus.OK);
	}
	
	@PutMapping("/toggleAtivo")
	public ResponseEntity<Boolean> toggleAtivo(@RequestBody Integer id) throws Exception {
		return new ResponseEntity<>(service.toggle(id), HttpStatus.ACCEPTED);
	}
}
