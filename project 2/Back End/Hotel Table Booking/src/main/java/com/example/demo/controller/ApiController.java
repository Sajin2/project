package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Details;
import com.example.demo.Service.DetailService;


@CrossOrigin
@RestController
public class ApiController{
@Autowired

private DetailService dtlservice;
@GetMapping("/getDetails")

public List<Details> getDetails(){
	return dtlservice.getAllDetails();
}

@PostMapping("/addDetails")
public Details postDetails(@RequestBody Details d) {
	 return dtlservice.saveDetails(d);
}

@DeleteMapping("/delete/{Id}")
public String delete(@PathVariable int Id)
{
	dtlservice.deleteDepartmentById(Id);
	return "Deleted";
}

@PutMapping("/updateDetails/{Id}")
public Details update(@PathVariable int Id,@RequestBody Details d)
{
	return dtlservice.update(Id, d);
}

}
