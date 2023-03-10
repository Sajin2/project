package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="TableBooking")
@Entity
public class Details {
@Id
@Column(name="Id")
private int Id;
@Column(name="Name")
private String Name;
@Column(name="Member")
private int Member;
@Column(name="Phone")
private long Phone;
@Column(name="Email")
private String Email;


public int getId()
{
	return Id;
}
public void setId(int Id)
{
	this.Id=Id;
}

public String getName()
{
	return Name;
}
public void setName(String Name) {
	this.Name=Name;
}
public int getMember()
{
	return Member;
}
public void setMember(int Member)
{
	this.Member=Member;
}
public long getPhone() 
{
	return Phone;
}
public void setPhone(long Phone)
{
	this.Phone=Phone;
}
public String getEmail()
{
	return Email;
}
public void setEmail(String Email)
{
	this.Email=Email;
}
public Details(String Name, int Member, long Phone, String Email, int Id)
{
	super();
	this.Id=Id;
	this.Name=Name;
	this.Member=Member;
	this.Phone=Phone;
	this.Email=Email;
	
}
public Details()
{
	
}
}
