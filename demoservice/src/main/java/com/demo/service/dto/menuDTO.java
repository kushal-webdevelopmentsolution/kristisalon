package com.demo.service.dto;


public class menuDTO {
	
	private Integer id;

	private String name;
	
	private String url;
	
	private Boolean active;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "menuDTO [id=" + id + ", name=" + name + ", url=" + url + ", active=" + active + "]";
	}
	
	
}