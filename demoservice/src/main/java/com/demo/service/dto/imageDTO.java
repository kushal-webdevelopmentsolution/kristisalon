package com.demo.service.dto;


public class imageDTO {
	
	private int id;

	private String name;
	
	private String imgurl;
	
	private String imgGroup;
	
	private int imgOrder;
	
	private Boolean active;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public String getImgGroup() {
		return imgGroup;
	}

	public void setImgGroup(String imgGroup) {
		this.imgGroup = imgGroup;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "imageDTO [id=" + id + ", name=" + name + ", imgurl=" + imgurl + ", imgGroup=" + imgGroup + ", imgOrder="
				+ imgOrder + ", active=" + active + "]";
	}

	public int getImgOrder() {
		return imgOrder;
	}

	public void setImgOrder(int imgOrder) {
		this.imgOrder = imgOrder;
	}


		
}