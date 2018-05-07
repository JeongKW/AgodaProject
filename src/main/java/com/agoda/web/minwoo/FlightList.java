package com.agoda.web.minwoo;

import org.springframework.stereotype.Component;

@Component
public class FlightList {
	int totalCount, departureSize, arrivalSize, startRow, endRow, blockSize, listBlock;

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getDepartureSize() {
		return departureSize;
	}

	public void setDepartureSize(int departureSize) {
		this.departureSize = departureSize;
	}

	public int getArrivalSize() {
		return arrivalSize;
	}

	public void setArrivalSize(int arrivalSize) {
		this.arrivalSize = arrivalSize;
	}

	public int getBlockSize() {
		return blockSize;
	}

	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}

	public int getListBlock() {
		return listBlock;
	}

	public void setListBlock(int listBlock) {
		this.listBlock = listBlock;
	}
	
	
}
