package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Details;

public interface DetailsRepo extends JpaRepository<Details, Integer> {

	

}
