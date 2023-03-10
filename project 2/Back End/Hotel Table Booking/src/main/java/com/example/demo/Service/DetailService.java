package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Details;
import com.example.demo.Repo.DetailsRepo;

@Service
public class DetailService {
@Autowired
private DetailsRepo dtl;
public Details saveDetails(Details d) {
	return dtl.save(d);
}
public List<Details> getAllDetails()
{
	return dtl.findAll();
}
public void deleteDepartmentById(int Id)
{
	dtl.deleteById(Id);
}
public Details update(int Id, Details d)
{
	return dtl.saveAndFlush(d);
}
}
